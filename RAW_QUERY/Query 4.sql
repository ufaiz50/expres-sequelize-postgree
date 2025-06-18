WITH family_counts AS (
  SELECT 
    employee_id, 
    relation_status, 
    COUNT(*) AS count
  FROM employee_family
  WHERE not is_divorced and is_life
  GROUP BY employee_id, relation_status
),
family_summary AS (
  SELECT 
    employee_id,
    STRING_AGG(CONCAT(count, ' ', relation_status), ' & ') AS family_data
  FROM family_counts
  GROUP BY employee_id
)
SELECT 	
	ep.employee_id, nik, e.name, is_active, gender, CONCAT(EXTRACT(YEAR FROM AGE(current_date, ep.date_of_birth)), ' Years Old') AS age 
		, edu.name school_name, edu.level
		, COALESCE(fs.family_data, '-') family_data
FROM employee e JOIN employee_profile ep ON ep.employee_id = e.id
JOIN education edu ON edu.employee_id = e.id
LEFT JOIN family_summary fs ON fs.employee_id = e.id;
