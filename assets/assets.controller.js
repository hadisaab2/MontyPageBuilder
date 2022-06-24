const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: "image",
      src: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      height: 350,
      width: 250,
    },
    {
      src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
      height: 350,
      width: 250,
    },
    {
      src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};

module.exports = { loadAllAssets };
