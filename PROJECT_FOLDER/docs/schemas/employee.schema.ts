export const Employee = {
  type: 'object',
  properties: {
    id: { type: 'integer', example: 1 },
    nik: { type: 'string', example: '1234567890123456' },
    name: { type: 'string', example: 'John Doe' },
    is_active: { type: 'boolean', example: true },
    start_date: { type: 'string', format: 'date-time' },
    end_date: { type: 'string', format: 'date-time' },
    created_by: { type: 'string', example: 'admin' },
    updated_by: { type: 'string', example: 'admin' },
    created_at: { type: 'string', format: 'date-time' },
    updated_at: { type: 'string', format: 'date-time' },
  },
};

export const CreateEmployeeInput = {
  type: 'object',
  required: ['nik', 'name'],
  properties: {
    nik: { type: 'string', example: '1234567890123456' },
    name: { type: 'string', example: 'John Doe' },
    is_active: { type: 'boolean', example: true },
    start_date: { type: 'string', format: 'date-time' },
    end_date: { type: 'string', format: 'date-time' },
    created_by: { type: 'string', example: 'admin' },
    updated_by: { type: 'string', example: 'admin' },
  },
};