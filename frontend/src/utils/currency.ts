export const fmt = (
  value: number
): string => {
<<<<<<< HEAD
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }
  ).format(value);
=======
  return (
    "Rp. " +
    Number(value).toLocaleString("id-ID")
  );
>>>>>>> 71d1392 (add finance feature)
};