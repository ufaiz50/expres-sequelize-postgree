export function calculateAge(birthDate?: Date, suffix: string = 'Years Old'): string {
  if (!birthDate) return '-';

  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return `${age} ${suffix}`;
}
