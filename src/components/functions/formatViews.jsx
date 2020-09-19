function formatNumber(num) {
  return num > 0
    ? `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} views`
    : "No views";
}

export default formatNumber;
