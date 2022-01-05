const randomColor = () => {
  const colors = [
    "#9777A8",
    "#3D324C",
    "#F4A160",
    "#5FAFE2",
    "#33B18F",
    "#E26566",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
