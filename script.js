<script>
function switchMode(mode) {
    const stage = document.getElementById('video-stage');
    const ytPlayer = document.getElementById('yt-player');
    const twitchPlayer = document.getElementById('twitch-player');
    const btnYt = document.getElementById('btn-yt');
    const btnTwitch = document.getElementById('btn-twitch');

    if (mode === 'yt') {
        stage.className = 'stage-yt';
        ytPlayer.classList.add('active');
        twitchPlayer.classList.remove('active');
        btnYt.classList.add('active');
        btnTwitch.classList.remove('active');
    } else {
        stage.className = 'stage-twitch';
        ytPlayer.classList.remove('active');
        twitchPlayer.classList.add('active');
        btnTwitch.classList.add('active');
        btnYt.classList.remove('active');
    }
}
</script>
