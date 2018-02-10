/// <reference path="../../types/videojs.d.ts"/>
import VideoJsPluginComponent from "./plugin";

function VideoJsPlugin(this: Player, option: VideojsPluginOption) {
    let player = this;
    const childElement = document.createElement("div");
    const div: HTMLElement = document.getElementById(player.id()) || document.createElement("div");
    div.appendChild(childElement);

    const plugin = new VideoJsPluginComponent(player, option, childElement);

    player.on('ready', function () {
        plugin.setup();
    });


    let checkForFirstTime = true;
    player.on('firstplay', function () {
        if (checkForFirstTime) {
            checkForFirstTime = false;
            plugin.showStartLinearAd();
        }
    });
}

videojs.plugin("vmap", VideoJsPlugin);
