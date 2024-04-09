const pois = [
    { descricao: 'POI 1', posicao: [40.505, -100.09] },
    { descricao: 'POI 2', posicao: [41.505, -99.09] },
    { descricao: 'POI 3', posicao: [42.505, -98.09] },
  ];
  
  export default (req, res) => {
    res.status(200).json({ pois });
  };