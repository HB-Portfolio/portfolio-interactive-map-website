<template>
  <div id="map" class="h-[800px] w-screen mx-auto relative"></div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapComponent",
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGJ1aHJlciIsImEiOiJjbHgzZmQ5M3gwdmdhMmtvZXBiMGR2bm10In0.8Ekjyl45hjC1Pgu5rk-tEg";

    const bounds = [
      [-114.027663 - 0.0185, 51.0388 - 0.025],
      [-114.027663 + 0.0185, 51.0388 + 0.025],
    ];

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/hbuhrer/clx3kesvb01se01rdgmlp6gbw",
      center: [-114.0553, 51.04],
      zoom: 14,
      maxBounds: bounds,
      cooperativeGestures: true,
    });

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Pearce Estate Park</strong><p>Riverside wetland park featuring a fish hatchery, plus a playground, picnic sites & trails.</p><img class="max-w-48" src="https://www.calgary.ca/content/dam/www/csps/parks/publishingimages/southeast-parks/pearce-park-banner.jpg" alt="Pearce Estate Park"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/dcWRTXxNJpvW8tQk9" target="_blank">Learn more</a></p>',
                icon: "park-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.01504070698257, 51.04118027756043],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Inglewood Bird Sanctuary</strong><p>At Inglewood Bird Sanctuary, come prepared for some serious birding with over 270 species to observe in this wildlife nature reserve. Listen to the birds sing as you walk along shady paths, perfect for little ones who want to adventure close to home.</p><img class="max-w-48" src="https://cms.10adventures.com/wp-content/uploads/2020/08/CA27A41.jpg" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/Bq9dk87iH6BAq39h7" target="_blank">Learn more</a></p>',
                icon: "park-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.00984, 51.03069],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Good News Coffee</strong><p>Located at the intersection of commercial and residential Inglewood in an old, uniquely zoned house.</p><img class="max-h-48" src="https://images.squarespace-cdn.com/content/v1/60298d82db9b3b52fbc41ce9/1628833735347-OQ2K4OY4AVAV7OVN6KXZ/GoodNewsHeader.jpg?format=1500w" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/DAtP7LWUSaRb8CkB7" target="_blank">Learn more</a></p>',
                icon: "coffee-shop",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.02469918675237, 51.03819061109087],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Rosso Coffee Roasters</strong><p>Experience the rich flavours of Canadian roasted coffee with Rosso Coffee Roasters.</p><img class="max-w-48" src="https://www.rossocoffeeroasters.com/cdn/shop/files/24-RC-BLUE-JEANS-LIFESTYLE-16_1_4_1.jpg?v=1717425130&width=750" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/rwtkg1x2kZRRwFbDA" target="_blank">Learn more</a></p>',
                icon: "coffee-shop",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03131355483114, 51.04032234418012],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Neighbour Coffee</strong><p>Offers fresh, dynamic menu items in a casual, small footprint café setting.</p><img class="max-w-48" src="https://images.squarespace-cdn.com/content/v1/5bf72f2cf79392d6757f8395/1690403871171-UJXE5NTYLV61FWWNENP8/Drinks-03.jpg?format=500w" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/EhyfG9dvV2cuUeZE7" target="_blank">Learn more</a></p>',
                icon: "coffee-shop",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03255046123658, 51.04061931783372],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Oolong Tea Shop</strong><p>Traditional tea shop in Inglewood.</p><img class="max-w-48" src="https://131404478.cdn6.editmysite.com/uploads/1/3/1/4/131404478/s885236426762329660_p684_i2_w2774.jpeg?width=2560&optimize=medium" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/8vmojYeqxMKkUekT6" target="_blank">Learn more</a></p>',
                icon: "coffee-shop",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03555, 51.04175],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Analog Coffee Inglewood</strong><p>Analog has a passion for coffee & community.</p><img class="max-w-48" src="https://images.squarespace-cdn.com/content/v1/61fc5ed864c9091f97da8510/dc369d29-e783-4170-8b39-d3411f13f434/analog-inglewood.jpg?format=750w" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/26yp311pDJLog8oU8" target="_blank">Learn more</a></p>',
                icon: "coffee-shop",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.04205, 51.03702],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Adorn Boutique</strong><p>This business is lovely, from the front display to the change rooms at the back. It is flirtatious, feminine, and perhaps a touch bohemian.</p><img class="max-h-48" src="https://th.bing.com/th?id=OLC.rc/zixLznFnm3Q480x360&rs=1&pid=ImgDetMain" alt="Calgary Tower"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/G1Ggq4UiaqzLRErS8" target="_blank">Learn more</a></p>',
                icon: "store-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03562, 51.04233],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Kent Of Inglewood Calgary</strong><p>This apothecary-style store for guys sells items such as handcrafted axes, cocktail accessories, and shaving goods. It also has one of the city&#39;s top cologne collections.</p><img class="max-w-48" src="https://www.truefittandhill.ca/cdn/shop/articles/rsz_kent_of_inglewood_calgary_exterior_credit_jared_sych_910c3864-5f1b-4505-8618-d7d615ed66b7_600x.jpg?v=1536322082"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/PxTnoSjva1MPKnRD7" target="_blank">Learn more</a></p>',
                icon: "store-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03293, 51.04152],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Deane House</strong><p>Located in a historic heritage property, this restaurant serves Canadian-inspired meals with a focus on seasonal and sustainable ingredients, including bright edible flowers plucked from the house&#39;s own garden.</p><img class="max-w-48" src="https://images.squarespace-cdn.com/content/v1/5d8ce4980ed4467c0bc04947/1601931476961-VJUJ1SA7TWBWFFLFFRPS/Deane+House.jpg"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/5hVrCsjDrWJb3Dgi7" target="_blank">Learn more</a></p>',
                icon: "restaurant-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03884, 51.04422],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>The Nash Restaurant & Off Cut Bar</strong><p>Set in a former 1900s hotel, this stylish restaurant serves inventive Canadian dishes & cocktails.</p><img class="max-h-48" src="https://images.squarespace-cdn.com/content/v1/5edd8af7ddd3842a3f380b50/2077bc1c-8cbf-4815-abea-f587e14fb6d8/Downtown+Wedding+Day-798.jpg?format=500w"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/h4Bxn5fAoqqfHptJ8" target="_blank">Learn more</a></p>',
                icon: "bar-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.0365, 51.04188],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Rouge</strong><p>High-end restaurant offering refined farm-to-fork meals & various wines in an 1890s house.</p><img class="max-w-48" src="https://inglewoodyyc.ca/wp-content/uploads/2022/10/rouge.jpg"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/w8k6i1ttwNCKss7w7" target="_blank">Learn more</a></p>',
                icon: "restaurant-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03354, 51.0426],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong>Cold Garden Beverage Company</strong><p>Funky, industrial-style brewhouse with a patio offering snacks & a variety of craft beers.</p><img class="max-w-48" src="https://calgaryguardian.com/wp-content/uploads/2021/08/1-13.jpeg"><p class="text-sky-400 hover:scale-110 transition duration-150 ease-in hover:underline underline-offset-2 decoration-1"><a href="https://maps.app.goo.gl/TDwzhBA2F5m9ADaR6" target="_blank">Learn more</a></p>',
                icon: "bar-icon",
              },
              geometry: {
                type: "Point",
                coordinates: [-114.03664, 51.04],
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": ["get", "icon"],
          "icon-size": 0.5,
          "icon-allow-overlap": true,
        },
      });

      map.on("click", "places", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseenter", "places", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "places", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    map.addControl(new mapboxgl.FullscreenControl());
  },
};
</script>
