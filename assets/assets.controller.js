<<<<<<< HEAD
const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: "image",
      src: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
=======
 const loadAllAssets = async (req, res) => {
  const assets = [
    {
      type: 'image',
      src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
>>>>>>> 2135a5ae2e74dbc90a70792442430684dba55fac
      height: 350,
      width: 250,
    },
    {
<<<<<<< HEAD
      src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
=======
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
>>>>>>> 2135a5ae2e74dbc90a70792442430684dba55fac
      height: 350,
      width: 250,
    },
    {
<<<<<<< HEAD
      src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
=======
      src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
>>>>>>> 2135a5ae2e74dbc90a70792442430684dba55fac
      height: 350,
      width: 250,
    },
  ];
  res.json(assets);
};

<<<<<<< HEAD
module.exports = { loadAllAssets };
=======
module.exports ={loadAllAssets}
>>>>>>> 2135a5ae2e74dbc90a70792442430684dba55fac
