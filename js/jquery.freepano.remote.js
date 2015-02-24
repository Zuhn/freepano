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

 /*
// Plugin constructor
function Remote(options)
{
    
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

    // on_panorama_init() method
    on_panorama_init: function remote_on_panorama_init() {

        // controls is not defined in freepano options
        if (typeof this.remote === 'undefined')
            return;

        // class instantiation and extension
        if (!(this.remote instanceof Remote))
            this.remote = new Remote($.extend(true,{panorama:this},this.remote)); // options

    },

    on_panorama_ready: function map_on_panorama_ready() {

        var panorama=this;

        var obj = panorama.controls;
        var output = '';
        for (var property in this) {
          output += property + ': ' + this[property]+'; ';
        }
        console.log(output);

        var socket = io.connect(ip);
        var username = 'FreePano';

        socket.on('connect', function(){
        socket.emit('deviceadded', 'FreePano');
            this.controls.devicemotion.move.remote = true;
        });

        socket.on('positionupdate', function(data){
            this.controls._device_move_by_device_motion(data);
            console.log('alpha: ' + Math.round(data.alpha) + '  beta: ' + Math.round(data.beta) +'  gamma: ' + Math.round(data.gamma));
        });

    }, 


    
    init: function(){

       

    }, // module_init





});

// subscribe to panorama events
Panorama.prototype.dispatchEventsTo(Remote.prototype);
*/
  
/*
 * freepano - WebGL panorama viewer
 *
 * Copyright (c) 2015 FOXEL SA - http://foxel.ch
 * Please read <http://foxel.ch/license> for more information.
 *
 *
 * Author(s):
 *
 *      Alexandre Kraft <a.kraft@foxel.ch>
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

(function($,Panorama){

/**
 * Class Constructor
 */
function Remote(options) {

    if (!(this instanceof Remote))
        return new Remote(options);

    $.extend(true,this,this.defaults,options);
    this.init();

}

/**
 * Extends Class Prototype
 */
$.extend(true,Remote.prototype, {

    // default values
    //
    // default values are automatically overrided if some are passed as
    // parameters on freepano instantiation. default values are not mandatory.
    //
    // as an example, an active flag state is set by default to false. see
    // /example/js/main.js to have a look how this flag is overrided on freepano
    // instantiation through example: { active: true }.
    defaults: {

        // example flag
        active: false

    },

    // init() method
    // the overridable part of the object constructor
    init: function remote_init() {
        console.log('init() called on remote module');
    },

    // on_panorama_preinit() method
    //
    // this method is run by the Panorama event dispatcher when the Panorama 'preinit' event is triggered with:
    //    "panorama.dispatch('preinit');"  which is run at the beginning of Panorama.prototype.init()
    //     allowing modules to modify at will options defined in the Panorama instantiation options,
    //     and other components (eg: overriding or hooking core and modules methods)
    //
    // this is possible because:
    //
    // 1. the event dispatcher has been setup for Panorama at the bottom of jquery.freepano.js with:
    //        "setupEventDispatcher(Panorama.prototype);"
    //
    // 2. the current prototype subscribe to Panorama events at the bottom of this file, with:
    //       "Panorama.prototype.dispatchEventsTo(Example.prototype);"
    //
    // check eventDispatcher.js for more details
    //
    on_panorama_preinit: function remote_on_panorama_preinit() {
        console.log('on_panorama_preinit() called on Remote Module');
    },

    // on_panorama_init() method
    on_panorama_init: function remote_on_panorama_init() {

        var panorama=this;

        console.log('on_panorama_init() called on Remote Module '+panorama.controls.devicemotion.move.remote);

        // default values override
        //
        // by default freepano doesn't instantiate a module if there is no
        // options override set for it (see default values above).
        //
        // remove this test if your module must be started anyway.
        if (typeof panorama.remote === 'undefined')
            return;

        // module instantiation
        //
        // depending your case, you may want to instantiate your module during
        // the init stage, pre-initialization (on_panorama_preinit()) stage or
        // even when the panorama is ready (on_panorama_ready()).
        if (!(panorama.remote instanceof Remote))
            panorama.remote = new Remote($.extend(true,{panorama:panorama},panorama.remote));


        var socket = io.connect(ip);
        var username = 'FreePano';

        socket.on('connect', function(){
        socket.emit('deviceadded', 'FreePano');
            panorama.controls.devicemotion.move.remote = true;
        });

        socket.on('positionupdate', function(data){
            panorama.controls._device_move_by_device_motion(data,panorama.controls);
            console.log('alpha: ' + Math.round(data.alpha) + '  beta: ' + Math.round(data.beta) +'  gamma: ' + Math.round(data.gamma));
        });

    },

    // on_panorama_ready() method
    on_panorama_ready: function remote_on_panorama_ready() {
        console.log('on_panorama_ready() called on Remote Module');
    }

});

/**
 * Subscribe to panorama events
 */
Panorama.prototype.dispatchEventsTo(Remote.prototype);

})(jQuery,Panorama);



