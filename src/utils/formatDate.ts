function formatDate(datestring: string): string {
  const date = new Date(datestring);
  const prettyMonth = padWithZero(date.getMonth() + 1);

  return `${padWithZero(date.getDate())}-${prettyMonth}-${date.getFullYear()}`;
}

function padWithZero(num: number): string {
  return num <= 9 ? `0${num}` : String(num);
}

export { formatDate };
