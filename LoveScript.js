let areYouSure = false;

function showHearts() {
    // Hide the initial asking GIF
    const askingGif = document.getElementById('asking-gif');
    if (askingGif) {
        askingGif.style.display = 'none';
    }
    const title = document.querySelector('h1');

    // Play music if the function exists
    if (typeof playMusic === 'function') {
        playMusic();
    }

    if (areYouSure) {
        // YES after "Are you sure?" -> user said No then Yes
        title.textContent = "It's okay… maybe another time";
        
        // Remove any existing temporary GIF first
        if (window.tempGifElement && window.tempGifElement.parentNode) {
            window.tempGifElement.parentNode.removeChild(window.tempGifElement);
        }
        
        // Create sad ending GIF
        const sadGif = document.createElement("img");
        sadGif.src = "Images/024.gif";
        sadGif.alt = "Sad bear";
        sadGif.style.width = "256px";
        sadGif.style.height = "256px";
        sadGif.style.marginTop = "20px";

        title.after(sadGif); // place image under the title
        
        hideButtons();
        areYouSure = false; // Reset for next time
        return; //  Exit function here
    }

    // FIRST YES → happy path (user said Yes immediately)
    title.textContent = "The date is reserved";
    
    // Remove the temporary sad GIF if it exists (from SadPenguin function)
    if (window.tempGifElement && window.tempGifElement.parentNode) {
        window.tempGifElement.parentNode.removeChild(window.tempGifElement);
    }
    
    // Create happy GIF
    const happyGif = document.createElement("img");
    happyGif.src = "Images/bubu.gif";
    happyGif.alt = "Happy bear";
    happyGif.style.width = "256px";
    happyGif.style.height = "256px";
    happyGif.style.marginTop = "20px";

    title.after(happyGif); // place image under the title
    
    launchHearts();
    hideButtons();
    // addBackButton();
    
    // Reset the areYouSure flag for consistency
    areYouSure = false;
}


function playMusic() {
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.play();
    }
}
function SadPenguin() {
        // Hide the initial asking GIF
    const askingGif = document.getElementById('asking-gif');
    if (askingGif) {
        askingGif.style.display = 'none';
    }
    const title = document.querySelector('h1');
    const penguin = document.getElementById('sad-penguin');

    if (!areYouSure) {
        // First NO
        title.textContent = "Are you sure?";
            const gif = document.createElement("img");

              gif.src = "Images/yall.gif";
            gif.alt = "Bear";
            gif.style.width = "256px";
            gif.style.height = "256px";
            gif.style.marginTop = "20px";
            
            title.after(gif); // place image under the title
            window.tempGifElement = gif;


        if (penguin) penguin.style.display = "block";
        areYouSure = true;
    } else {
        // NO after "Are you sure?" → hearts
        launchHearts();

        setTimeout(() => {
            title.textContent = "Hehehe I knew it, got you!";
            // Remove the temporary sad GIF first
            if (window.tempGifElement && window.tempGifElement.parentNode) {
                window.tempGifElement.parentNode.removeChild(window.tempGifElement);
            }
            // create gif image properly
            const gif = document.createElement("img");

            gif.src = "Images/giphy.gif";
            gif.alt = "Bear";
            gif.style.width = "256px";
            gif.style.height = "256px";
            gif.style.marginTop = "20px";

            title.after(gif); // place image under the title

            hideButtons();
            addBackButton();
        }, 0);
    }
}
function launchHearts() {
    const container = document.body;
}


function hideButtons() {
    document.querySelectorAll('.valentine-button')
        .forEach(btn => btn.style.display = 'none');
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.valentine-button')
        .forEach(btn => btn.classList.add('intrusive'));
});

function openEnvelope() {
    const envelope = document.getElementById("envelope");

    envelope.style.transform = "scale(1.05)";
    envelope.style.opacity = "0";

    setTimeout(() => {
        envelope.style.display = "none";
        document.querySelector(".container h1").style.display = "block";
    }, 500);
}
