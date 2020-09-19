const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const splitDate = (dateStr) => {
  if (dateStr) {
    let date = dateStr.split("-");
    return `${date[2]} ${month[Number(date[1]) - 1]}`;
  } else {
    return "Not Yet Released";
  }
};

export default splitDate;
