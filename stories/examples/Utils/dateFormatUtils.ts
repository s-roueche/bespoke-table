import dayjs, { Dayjs } from 'dayjs';

/**
 * Formats a date using dayjs library.
 *
 * @param date - The date to be formatted.
 * @param format - The format to use. Default is 'DD/MM/YYYY HH:mm'.
 * @returns Formatted date as string.
 */
export function formatDate(date: dayjs.ConfigType, format: string = 'DD/MM/YYYY'): string {
  return dayjs(date).format(format);
}

export function toDate(date: dayjs.ConfigType): Dayjs {
  return dayjs(date);
}
