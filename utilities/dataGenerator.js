
var names = ['Phantom', 'Mavic Pro', 'Spark', 'Halo', 'Platinum Fly', 'Bebop 2', 'Bebop 1', 'Typhoon', 'Hornet', 'Eagle', 'Aardvark', 'Weasel', 'Falcon', 'Parrot', 'Tsunami', 'Hummingbird', 'Whale', 'Lead Ballon', 'Excelsior', 'Steadfast', 'Titanic', 'Challenger', 'Explorer', 'Titan', 'Galileo', 'Warthog', 'Constitution', 'Britannia', 'Queen Mary', 'Hanyu', 'Marlin', 'Henry', 'Ivy', 'Man-Bat',];
var manufacturer = ['Dajiang Innovations', 'AeroVironment', 'Ambarella', 'Boeing', 'Lockheed Martin', '3D Robotics', 'Parrot SA', 'GoPro', 'Yuneec', 'Northrop Grumman', ];
var color = ['Black', 'Slate', 'White', 'Azure', 'Crimson', 'Vermillion',];
var image = [
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-00.jpg?itok=lfMW1KUQ&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-01.jpg?itok=i7bfo9cK&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-02.jpg?itok=ZcNajxlf&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-03.jpg?itok=ZDWebsXe&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-04.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-05.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-06.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-07.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-08.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-09.jpg?itok=dEigMkKk&fc=50,50',
  'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/08/drone-09.jpg?itok=dEigMkKk&fc=50,50',
  'https://cdn.vox-cdn.com/thumbor/vPg3038R00gWj4tzgYQS1lDb5Y8=/0x0:1024x576/920x613/filters:focal(431x207:593x369):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56508181/Drone_LIlY_00011_1024x576.0.png',
  'https://dev.cdn.wetalkuav.com/wp-content/uploads/2018/02/08010609/mind-control-drones-1024x678.jpg',
  'https://i0.wp.com/thedronegirl.com/wp-content/uploads/2016/07/MG_1612.jpg?resize=1024%2C683',
  'https://www.menkind.co.uk/media/catalog/product/cache/image/1000x/beff4985b56e3afdbeabfc89641a4582/r/a/race_vision_220_fpv_pro_drone_58989_1_.jpg',
  'https://truimg.toysrus.com/product/images/sharper-image-rechargeable-dx-2-stunt-drone-2.4-ghz-black--54BCFCEC.zoom.jpg?fit=inside|485:485',
  'https://cdn2.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/3/4/3495037_1.jpg',
];


var randomNumberGen = (someNum) => {
  return Math.floor(Math.random() * someNum)
}
// 50-74
var droneMaker = (number) => {
  var dataStorage = [];
  for (var i = 50; i < number; i++) {
    let newDrone = {};
    newDrone = {
      id: i,
      name: names[randomNumberGen(names.length)],
      price: ('$' + randomNumberGen(1200) + '.00'),
      weight: (randomNumberGen(6) + 1),
      manufacturer: manufacturer[randomNumberGen(manufacturer.length)],
      dimensions: `${randomNumberGen(21) + 1} x ${randomNumberGen(21) + 1} x ${randomNumberGen(21) + 1} inches`,
      color: color[randomNumberGen(color.length)],
      image_url: image[randomNumberGen(image.length)],
      category: 'drone',
      overallReview: randomNumberGen(6),
      reviewNumber: randomNumberGen(400)

    }
    dataStorage.push(newDrone);
  }
  return dataStorage;
}

var phoneDecorator = (someArr) => {
  var dataStorage = [];
  for (var i = 0; i < 25; i++) {
    someArr[i].price = ('$' + randomNumberGen(1000) + '.00');
    someArr[i].weight = randomNumberGen(17) + ' oz',
    someArr[i].dimensions = randomNumberGen(10) + ' x ' + (randomNumberGen(10)/10) + ' x ' + randomNumberGen(5) + ' in';
    someArr[i].color = color[randomNumberGen(color.length)],
    someArr[i].overallReview = randomNumberGen(6),
    someArr[i].reviewNumber = randomNumberGen(400)
    dataStorage.push(someArr[i]);
  }
  return dataStorage
}

var tvDecorator = (someArr) => {
  var dataStorage = [];
  var tvImages = [
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5748/5748203_rd.jpg',
    'http://images.samsung.com/is/image/samsung/my-hd-j4303-ua32j4303akxxm-002-front-indigoblue?scl=1&fmt=png-alpha',
    'https://www.thegoodguys.com.au/wcsstore/TGGCAS/idcplg?IdcService=GET_FILE&RevisionSelectionMethod=LatestReleased&noSaveAs=1&dDocName=50046771_506407&Rendition=ZOOMIMAGE',
    'https://i5.walmartimages.ca/images/Enlarge/747/_01/999999-887276046747_01.jpg',
    'http://www.220-electronics.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-ps-50c450-plasma-multi-system-tv.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81m9jhinCmL._SL1500_.jpg',
    'http://eventsbyfabulous.com/wp-content/uploads/2013/09/samsung-tv-front.jpg',
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5844/5844904_sd.jpg',
    'http://cdn2.expertreviews.co.uk/sites/expertreviews/files/2017/08/best_tv_deals_-_lg_22mt49df.jpg?itok=rO2_w58f',
    'https://images.philips.com/is/image/PhilipsConsumer/40HFL3011T_12-IMS-en_GB?&wid=960&hei=960&$jpglarge$',
    'http://nebula.wsimg.com/9fe26742465719fe398d51b310b766ae?AccessKeyId=261E41F217B038BD12B5&disposition=0&alloworigin=1',
    'https://www.thegoodguys.com.au/wcsstore/TGGCAS/idcplg?IdcService=GET_FILE&RevisionSelectionMethod=LatestReleased&noSaveAs=1&dDocName=50044402_483423&Rendition=ZOOMIMAGE',
    'https://cdn2.macworld.co.uk/cmsdata/features/3664165/samsung-smart-tv.jpg',
    'https://brain-images-ssl.cdn.dixons.com/7/7/10149777/u_10149777.jpg',
  ];
  for (var i = 0; i < 25; i++) {
    someArr[i].price = ('$' + randomNumberGen(2000) + '.00');
    someArr[i].weight = randomNumberGen(50) + ' lb',
    someArr[i].dimensions = randomNumberGen(80) + ' x ' + (randomNumberGen(10)) + ' x ' + randomNumberGen(40) + ' in';
    someArr[i].color = color[randomNumberGen(color.length)],
    someArr[i].image_url = tvImages[randomNumberGen(tvImages.length)],
    someArr[i].overallReview = randomNumberGen(6),
    someArr[i].reviewNumber = randomNumberGen(400)
    dataStorage.push(someArr[i]);
  }
  return dataStorage
}