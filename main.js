// Kung Fu Panda Look Up

// Event Listener
document.getElementById('search').addEventListener('click', characterSearch);

// Event Function
function characterSearch() {
    // Get Input Value (What character to look for)
    let name = document.getElementById('input-name').value;
    name = name.toLowerCase();

    // Test Input Variable and update the page
    if (name == 'tigress' || name == "master tigress") {
        // Update page to Tigress
        document.getElementById('main-img').src = "images/tigress.png";
        document.getElementById('character-name').innerHTML = 'Tigress';
        document.getElementById('quote').innerHTML = '"That was pretty hardcore!"';
        document.getElementById9('wiki-link').innerHTML = "Tigress Wiki";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Tigress";

    } else if (name == 'mantis' || name == "master mantis") {
        // Update page to Mantis
        document.getElementById('main-img').src = "images/mantis.png";
        document.getElementById('character-name').innerHTML = 'Mantis';
        document.getElementById('quote').innerHTML = '"Fear The Bug!"';
        document.getElementById9('wiki-link').innerHTML = "Mantis Wiki";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Mantis";

    } else if (name == 'viper' || name == "master viper") {
        // Update page to Viper
        document.getElementById('main-img').src = "images/viper.png";
        document.getElementById('character-name').innerHTML = 'Viper';
        document.getElementById('quote').innerHTML = '"I spy with my little eye, something, green!"';
        document.getElementById9('wiki-link').innerHTML = "Viper Wiki";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Viper";

    } else if (name == 'monkey' || name == "master monkey") {
        // Update page to Mantis
        document.getElementById('main-img').src = "images/monkey.png";
        document.getElementById('character-name').innerHTML = 'Monkey';
        document.getElementById('quote').innerHTML = '“If you beat me, I will go. If not, then it is you who must leave—without your pants!”';
        document.getElementById9('wiki-link').innerHTML = "Monkey Wiki";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Monkey";

    } else if (name == 'po' || name == "master po") {
        // Update page to Mantis
        document.getElementById('main-img').src = "images/po.png";
        document.getElementById('character-name').innerHTML = 'Po';
        document.getElementById('quote').innerHTML = '"Buddy, I am the Dragon Warrior."';
        document.getElementById9('wiki-link').innerHTML = "Po Wiki";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Po";

    } else {
        // Update page to Question Mark
        document.getElementById('main-img').src = "images/question-mark.png";
        document.getElementById('character-name').innerHTML = '????????';
        document.getElementById('quote').innerHTML = '"Character Not Found"';
        document.getElementById9('wiki-link').innerHTML = "Wiki Home";
        document.getElementById9('wiki-link').href = "https://kungfupanda.fandom.com/wiki/Kung_Fu_Panda_Wiki";
    }
}
