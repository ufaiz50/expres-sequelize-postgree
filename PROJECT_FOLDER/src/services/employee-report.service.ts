import { EmployeeProfile } from "../models/employee-profile";
import { Employee } from "../models/employee";
import { Education } from "../models/education";
import { EmployeeFamily } from "../models/employee-family";
import { calculateAge } from "../utils/date.util";


export class EmployeeReportService {

    static async getAll() {
        const employees = await Employee.findAll({
            include: [
                {
                    model: EmployeeProfile,
                    as: 'employee_profiles',
                    attributes: ['gender', 'date_of_birth']
                },
                {
                    model: Education,
                    as: 'educations',
                    attributes: ['name', 'level']
                },
                {
                    model: EmployeeFamily,
                    as: 'employee_families',
                    attributes: ['relation_status'],
                    where: {
                        is_divorced: false,
                        is_life: true,
                    },
                    required: false
                }
            ]
        });
        
        const result = employees.map(emp => {
            const familyCounts: Record<string, number> = {};

            emp.employee_families?.forEach(fam => {
                const status = fam.relation_status;
                if(status) familyCounts[status] = (familyCounts[status] || 0) + 1;
            });

            const familyData = Object.entries(familyCounts)
                .map(([status, count]) => `${count} ${status}`)
                .join(' & ') || '-';

            const lastProfile = emp.employee_profiles?.[emp.employee_profiles.length - 1];
            const lasEducation = emp.educations?.[emp.employee_profiles.length - 1];

            const age = lastProfile.date_of_birth
                ? calculateAge(lastProfile.date_of_birth)
                : '-';

            return {
                employee_id: emp.id,
                nik: emp.nik,
                name: emp.name,
                is_active: emp.is_active,
                gender: lastProfile.gender ?? '-',
                age,
                school_name: lasEducation.name ?? '-',
                school_level: lasEducation.level ?? '-',
                family_data: familyData
            };
        });

        return result
    }
}