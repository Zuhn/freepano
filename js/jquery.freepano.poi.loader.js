/*
 * freepano - WebGL panorama viewer
 *
 * Copyright (c) 2014,2015 FOXEL SA - http://foxel.ch
 * Please read <http://foxel.ch/license> for more information.
 *
 *
 * Author(s):
 *
 *      Luc Deschenaux <l.deschenaux@foxel.ch>
 *
 *
 * This file is part of the FOXEL project <http://foxel.ch>.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Additional Terms:
 *
 *      You are required to preserve legal notices and author attributions in
 *      that material or in the Appropriate Legal Notices displayed by works
 *      containing it.
 *
 *      You are required to attribute the work as explained in the "Usage and
 *      Attribution" section of <http://foxel.ch/license>.
 */

function POI_loader(options) {
  if (!this instanceof POI_loader) {
    return POI_loader(options);
  }
  $.extend(true,this,options);
  this.init();
}

$.extend(POI_loader.prototype,{
    init: function poiLoader_init() {
    },
    on_panorama_ready: function poiLoader_onPanoramaReady(e){
      var panorama=this;
      $.ajax({
          url: poi_path+panorama.list.currentImage+'.json',
          error: function() {
            $.notify('Error: Cannot load POI data');
          },
          success: function(json) {
            panorama.poi=JSON.parse(json);
          }
      });
    }
});

// subscribe to panorama events
Panorama.prototype.dispatchEventsTo(POI_loader.prototype);
