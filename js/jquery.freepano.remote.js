/*
 * freepano - WebGL panorama viewer
 *
 * Copyright (c) 2014-2015 FOXEL SA - http://foxel.ch
 * Please read <http://foxel.ch/license> for more information.
 *
 *
 * Author(s):
 *
 *      Alexandre Kraft <a.kraft@foxel.ch>
 *
 *
 * Contributor(s):
 *
 *      Nils Hamel <n.hamel@foxel.ch>
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

/*
console.log('ini remote file');

function Remote(options) {
	 console.log('construct Remote');
    if (!(this instanceof Remote))
        return new Remote(options);

    $.extend(true,this,Remote.prototype.defaults,options);

    this.init();

}



$.extend(true,Remote.prototype, {

	// default values
    defaults: {
        // active
        active: false,
        },


	init:function()
	{
		console.log('ini remote');
		var socket = io.connect(ip);
		var username = 'FreePano';

			socket.on('connect', function(){
		    socket.emit('deviceadded', 'FreePano');
		    
		    //this.Controls.devicemotion.move.remote = true;
		});

		socket.on('positionupdate', function(data){
		    //_device_move_by_device_motion(data);
		    console.log('alpha: ' + Math.round(data.alpha) + '  beta: ' + Math.round(data.beta) +'  gamma: ' + Math.round(data.gamma));
		});

	}

});



// setup Map event dispatcher
setupEventDispatcher(Remote.prototype);

// subscribe to panorama events
Panorama.prototype.dispatchEventsTo(Remote.prototype);
*/

/*
 * freepano - WebGL panorama viewer
 *
 * Copyright (c) 2014,2015 FOXEL SA - http://foxel.ch
 * Please read <http://foxel.ch/license> for more information.
 *
 *
 * Author(s):
 *
 *      Kevin Velickovic <k.velickovic@foxel.ch>
 *
 *
 * Contributor(s):
 *
 *      Luc Deschenaux <l.deschenaux@foxel.ch>
 *      Alexandre Kraft <a.kraft@foxel.ch>
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
alert('------> 1 INI NEW MODULE JS FILE IN INDEX.HTML');
console.log('------>  1 INI NEW MODULE JS FILE IN INDEX.HTML');
// Plugin constructor
function Remote(options)
{
	alert('------> 2 CONSTRUCT NEW MODULE');
	console.log('------> 2 CONSTRUCT NEW MODULE');
    if (!(this instanceof Remote)) {
      return new Remote(options);
    }

    // merge specified options with default options and extend this instance
    $.extend(true,this,Remote.prototype.defaults,options);

    // Initialize plugin
    this.init();
}

// Extend plugin prototype
$.extend(true, Remote.prototype, {

    // default values
    defaults: {
        // active
        active: true,
    },


    
    init: function(){

        var remote=this;
		alert('------> 3 INI NEW MODULE');
		console.log('------> 3 INI NEW MODULE');

    }, // module_init

});

// setup Map event dispatcher
setupEventDispatcher(Remote.prototype);

// subscribe to panorama events
Panorama.prototype.dispatchEventsTo(Remote.prototype);

