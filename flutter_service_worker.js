'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7dc6b7c88910d957dc1f05354fe2654a",
"index.html": "d9f42f351648881015a324015986171a",
"/": "d9f42f351648881015a324015986171a",
"main.dart.js": "63243caabc53f1669370394ea9387aaa",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "af2b378869ec1f769b926e953652006f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/pages.yml": "e954ca6f07b017b6bc6ec9b39f96c621",
"manifest.json": "fdbbb19baa0f87e066f6d03673df9075",
".git/ORIG_HEAD": "15309a45ff2ad86440b8ba54e7c22001",
".git/config": "6c4eeebd5debd039f442924a6f2f2d2f",
".git/objects/92/3e795d016b848c041b26db15f834e7d5553397": "8b934b1eae2bc69c30a062725b20922d",
".git/objects/92/9442ab061cac972932830543e6d9fd7246e632": "8a65e633becaf51f221482566df94906",
".git/objects/6f/3f3c873c5baca8f7f427f1be80ae2cb3cdfa99": "63ec8257365a9da3298bf09ffe35aedf",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/f2fbc53ea10c3af220971e2d4c60aa69d12d40": "a0df0cafbde6d6179c3fe35f34f293f7",
".git/objects/35/69ff5d564e84684926dea959b07a441deb25c2": "7e49e5cf87c9afee344a7920bc7d049a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/a1995a993b44a087ac53da1ffd580b3bdad01a": "52b754cacf668ce048fdb0202b484afe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/e1b4fe339cf83d8ef40b2cf64afb5b81be3dba": "fa6ab6907de7912525f3ab9ebfc4fda8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/53d18ba376ef02ffda6dafaf869e1a96127534": "3bf75e456d841d1d0704524dcdd60248",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/c9bfc4b33c96f9eda405cd547576131bb181e0": "5e35a728f312a2841edb048131c804e5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/19398d36827c3fb974b0b292345fb89b13632b": "b942b16055f2125c20838d8f18015437",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/71ca5dba3c2c2bcadfd4aa56eccfa7e0facac4": "3693a62fff52a4b3473b1b96dc29d4fd",
".git/objects/11/f2f8942d7e19b821b3c5bc07a945e72775296f": "b3d92d2886123e1ac0e45d313f373248",
".git/objects/29/ec29fa7f720d40d4053942971610c729e03c97": "0061c7d72adc390aa99655137ea1bef7",
".git/objects/29/eb008882356d1119083c194af5fc692b58a559": "3d7c5c44b411a1cacb298ee1d1ec3c29",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/484b6e1b127171a7b0a913d46bd6de3c023ae8": "8204c8d70ca3924969bae33643851c22",
".git/objects/73/5b890ad682e7c6a83d8291ddc4997b113967ec": "7ed62be845554270a4407dff4be79ca2",
".git/objects/74/bc6b43bc528bccaaef467ce88c0e4b13bf6860": "a2c916fa82ea4384e0bf1a63525e2eff",
".git/objects/8f/0a9440cdb5a328801fe86a712bd53a9f929404": "32a6f177590a9821153861bd67709f69",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b6aad6d78d6507d0c39b364be8e9bdc62d257f": "31ae3330eecafb17c28b9496c8fdead9",
".git/objects/7e/928e4e39b362c674a89a0d758c8d3f3a9c7c2a": "2aafa06bcd03c97dbffea2cbf519984d",
".git/objects/86/bdc605361d752b8cb9bb3b83be737ce2bc01dd": "82363b7cd7508d295a1ca6f666184872",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a6e46f0fa35e4cd9f9ebf78ee3ed23927f15fc": "0adb0e5d1182dd50437dd60d06c560de",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/36/56e8b9aaa12df6ef6c1b7c996f51a0b054a2fc": "259dbd51acb0d1f174c61b172f351760",
".git/objects/5d/3921e9d672eced568dbdf4013814d3b0722742": "0ea0ab09cfdb2363fecbe0463a5eaf79",
".git/objects/3a/c0e021e353311765d9a380e242af90ab50b642": "f2c81abdd462b615b08392bed2f6ce27",
".git/objects/54/74ec891efea4b6e5f5d0fae5935ef9b92e152c": "5e2da547995f254869b720a29fde0c35",
".git/objects/3f/c882a3262e19e2019f792f4edbca3951c4de78": "f7b61f8ab42745778a0967d57f3906fb",
".git/objects/5e/66e3fc5c909914b0ef5aeba7a4ad41f9b8548a": "74085a76d6e80bfcb02c4e181d4afbfa",
".git/objects/6c/d2c02ce219442a919b0b2fbb7a82c948a7b364": "4b04dc7c8b6dc5af23ae35c957dcdcd8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/e7/0d0863b3f630b24ef9172b44135313fb95eae1": "9c0d9ebbc586314514ecf973118ffcd2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/6dae363591aeafd510611031f38678e3c2c162": "dfeb7942d08e2daec55771c045392148",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/c7cb39caa4ebededf254cd2d05ee016f0f2134": "980ee8e8d8414f99e4f3d3c04558e99d",
".git/objects/23/0041831d1751bd1be9703933e9b04042ae837c": "19301b08b495864a13bcca9e54297537",
".git/objects/12/07dec02bf55f1e5dd5aec3e37f642a3a8541e6": "4ea088a5b4c76573554b4ec81959d112",
".git/objects/12/f1f4ea3c8a75a42a414c31b8a0b1362d432f13": "6f34df476ba94ee77a99364bf7ddbdbb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/925710f385ff537fa7ad01cdda0d1e1ede57e1": "16a8d6fe792c7065c80fc76350f56e30",
".git/objects/82/b49d7bf7cd8407badd2e07659891287633d7f4": "64d284dbd676e862c6fa39b79b5f5f26",
".git/objects/49/9f90b3f51affda6b5fac6f5000c31d6926addd": "57794e21ab5144eec817f12b92573504",
".git/objects/7a/25c4aad03a8356fab6784fc8d89e4e413daaf3": "301dd4ab6d634e23a2d58e3ec1179099",
".git/objects/14/503369722338219e71f9519e64424d8b6137da": "c28a99c1a6a814fedfeccb9c7c7997ea",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7dec7e42dbcdd6cf78fe0890df6d6152",
".git/logs/refs/heads/master": "45b0f046e40c149203de10285c3ffb50",
".git/logs/refs/remotes/origin/HEAD": "ff9ae5ce08a615e093d937062092715a",
".git/logs/refs/remotes/origin/master": "f96ef229a0eb6cc779654521c1db690c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "022e9d85b3b00715b8670d0aad64467e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "04300302ea1c459420cb06ecc1a3f3c1",
".git/index": "eb74eefbfb88e195dd2d43ce0a955a70",
".git/COMMIT_EDITMSG": "9cbf0a9eaff7f75b3142de0b3a4d4cdf",
".git/FETCH_HEAD": "bed11c8ff5f68fad09dc37c17d3c8150",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "77457bc1f3a55cffa17e174143d069c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
