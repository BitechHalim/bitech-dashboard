// import React from 'react';
// import {
//   LayerGroup,
//   LayersControl,
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMapEvent,
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import * as L from 'leaflet';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';
//
// const SetViewOnClick = () => {
//   useMapEvent('click', e => {
//     const map = e.target;
//     map.setView(e.latlng, map.getZoom(), {
//       animate: true,
//     });
//   });
//
//   return null;
// };
//
// const Map = () => {
//   const handleMarkerClick = () => {
//     console.log('Marker clicked');
//   };
//
//   const handleViewData = () => {
//     console.log('View Data clicked');
//   };
//
//   const handleGetDirections = () => {
//     console.log('Get Directions clicked');
//   };
//
//   return (
//     <div style={{ width: '100%', height: '70vh' }} className="bg-background">
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         scrollWheelZoom={false}
//         style={{ height: '90%', width: '100%' }}
//         className="rounded-lg border border-border shadow-md"
//       >
//         <TileLayer
//           attribution="Google Maps"
//           url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
//         />
//         <LayersControl>
//           <LayersControl.BaseLayer name="Open Street Map">
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//           </LayersControl.BaseLayer>
//
//           <LayersControl.BaseLayer name="Mapbox Map">
//             <TileLayer
//               attribution='&copy; <a href="https://www.mapbox.com">Mapbox</a> '
//               url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}"
//               accessToken={'your token here'}
//             />
//           </LayersControl.BaseLayer>
//
//           <LayersControl.BaseLayer name="Mapbox Map Satellite">
//             <TileLayer
//               attribution='&copy; <a href="https://www.mapbox.com">Mapbox</a> '
//               url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}"
//               accessToken={'your token here'}
//             />
//           </LayersControl.BaseLayer>
//
//           <LayersControl.BaseLayer checked name="Google Map">
//             <TileLayer
//               attribution="Google Maps"
//               url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
//             />
//           </LayersControl.BaseLayer>
//
//           <LayersControl.BaseLayer name="Google Map Satellite">
//             <LayerGroup>
//               <TileLayer
//                 attribution="Google Maps Satellite"
//                 url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
//               />
//               <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
//             </LayerGroup>
//           </LayersControl.BaseLayer>
//         </LayersControl>
//         <Marker
//           position={[51.505, -0.09]}
//           eventHandlers={{ click: handleMarkerClick }}
//           icon={L.icon({
//             iconUrl:
//               'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
//             iconSize: [40, 40],
//             className: 'custom-leaflet-icon',
//           })}
//         >
//           <Popup>
//             <Card className="bg-card text-card-foreground">
//               <CardHeader>
//                 <h3 className="text-lg font-bold">Location Details</h3>
//               </CardHeader>
//               <Separator />
//               <CardContent className="flex flex-col gap-2 py-4">
//                 <Button onClick={handleViewData} className="w-full">
//                   View Data
//                 </Button>
//                 <Button
//                   onClick={handleGetDirections}
//                   variant="outline"
//                   className="w-full"
//                 >
//                   Get Directions
//                 </Button>
//               </CardContent>
//             </Card>
//           </Popup>
//         </Marker>
//         <SetViewOnClick />
//       </MapContainer>
//     </div>
//   );
// };
//
// export default Map;
