<script lang="ts">
    import '$lib/styles/progress-bar.css'
    import { onMount } from "svelte";
    import type { PageData } from "./$types";
    import { shuffleLetters } from "../delinquent-duo/shuffleAnimation";
    import type { SongInfo } from "$lib/types";

    export let data: PageData
    let imageflip = false;
    let hidden = true;

    let audio: HTMLAudioElement;

    const songinfo = (data.songInfo.songInfo as SongInfo);
    const img = songinfo.ogImage;

    const progress = songinfo.progress;

    onMount(() => {
        const isAnimationDone = window.localStorage.getItem('duoAnimation');
        if(isAnimationDone === 'true'){
            imageflip = true;
            hidden = false;
            return;
        }
           
        audio = document.createElement('audio');
        audio.preload = 'auto';
        audio.src = songinfo.audioClip;
        audio.volume = 0;
        document.body.appendChild(audio);

        const image = document.getElementsByClassName('imagetest')[0];
    })

    let click = false;
    function onClick() {
        if(click)
            return;

        click = true;
        audio.play();
        audio.pause();

        setTimeout(() => {
            audio.volume = 0.2;
            audio.currentTime = 0;
            audio.play();
        }, 1000)

        setTimeout(() => {
            imageflip = true;
            hidden = false;
            window.localStorage.setItem('duoAnimation', 'true'); 
        }, 4000)        
    }

</script>


<div class='center'>
    <div class='gallery'>
        <img src={img} class='imagetest' class:imageflip on:click={onClick}>
    </div>

    <div class="right-menu" class:hidden>
        <p class='diff-icon'>32</p>

        <div class='title'>
            <h2>{songinfo.titleJP} - {songinfo.artistJP}</h2>
            <h3>{songinfo.title} - {songinfo.artist}</h3>
            <h4>Charted by Chinori</h4>
        </div>
        
        <br> 
        <div class='row-evenly'>
            <p>
                <a href={songinfo.sonolusLink}>
                <img src="https://sonolus.com/icon.png" class='icon'>
                Chart link
                </a>
            </p>
    
            <p>
            
                <a href={songinfo.youtubeLink}>
                    <img src="/youtube.png" class='icon'>
                    Song link
                </a>
            </p>


        </div>

        <br>

        <div class="range" style="--p:{progress}"></div>
        
    </div>
</div>

<style>
    .center {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100vh;
        overflow: visible !important;
    }

    @media only screen and (max-width: 1000px) {
        .center {
            flex-direction: column;
            gap: 10px;
        }

        .right-menu {
            padding: 50px 120px !important;
        }
    }

    .gallery {
        display: flex;
    }

    .imagetest {
        aspect-ratio: 1;
        filter: opacity(100%) blur(50px);
        scale: 0.8;
        transition-property: scale, filter;
        transition-duration: 0.5s;
        transition-timing-function: ease-in;
    }

    .imageflip {
        filter: blur(0px);
        scale: 1;
    }


    .hidden {
        display: none !important;
        transition: display 2s linear;
    }

    .right-menu {
        position: relative;

        padding: 30px 200px;
        background-color: #999999;
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, .3);
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: 32px;
        aspect-ratio: 1;
        border-radius: 6px;
    }

    .diff-icon {
        font-size: 1.25rem;
        color: white;
        font-weight: bold;
        position: absolute;
        text-align: left;
        top: 0;
        right: 0;
        padding: 20px;
        padding-right: 50px;
        background-color: rgb(102, 0, 128);
    }

    h2,h3,h4 {
        text-align: center;
    }

    h3, h4 {
        color: #4a4a4a;
        font-weight: bold;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        font-weight: bold;
        text-decoration: none;
    }

    .row-evenly {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>