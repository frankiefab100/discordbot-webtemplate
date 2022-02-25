


const YourBotName = "YOUR DISCORD BOT NAME";
//                 ^^^^^^^^^^^^^
//                 Modify the text within the "" to your bot name 

const YourBotDescription = "Brief paragraph describing the purpose and functionality of your discord bot";
//                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                        Modify the text within the "" to your bot description

const YourBotLinks = {
        YourDiscordLink: "https://google.com",               
        YourGithubLink: "https://github.com/"
        // Modify the text within the "" to your bot links
}

const YourBotLinkNames = {
        YourDiscordNavName: "Invite",
        YourGithubNavName: "Source",
        YourDiscordButtonName: "Invite To Server",
        YourGithubButtonName: "View Source"
        // Modify the text within the "" if you'd like to change the link titles
}


/*------------------------ IGNORE ------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/

function contains(parent, child) {
        return parent !== child && parent.contains(child);
}

const Months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const D = new Date();

const Headline = document.querySelector(".headline").innerHTML = YourBotName;
const SubHeadline = document.querySelector(".sub-headline").innerHTML = Months[D.getMonth()] + " " + D.getFullYear();
const Paragraph = document.querySelector(".paragraph").innerHTML = YourBotDescription;

const GetBotName = document.querySelectorAll(".botname");
const GetBotLinks = document.querySelectorAll(".botlink");

const Discord = document.querySelectorAll(".discord");
const Github = document.querySelectorAll(".github");

const Nav = document.querySelector(".nav");
const ButtonContainer = document.querySelector(".btn-container");

GetBotName.forEach(Bot => {
      Bot.innerHTML = YourBotName; 
});

GetBotLinks.forEach(Link => {
        Discord.forEach(Discord => {
                Discord.href = YourBotLinks.YourDiscordLink;
                if(contains(Nav, Discord)){
                        Discord.innerHTML = YourBotLinkNames.YourDiscordNavName;
                }
                if(contains(ButtonContainer, Discord)){
                        Discord.innerHTML = YourBotLinkNames.YourDiscordButtonName;
                }
                
        });
        
        Github.forEach(Github => {
                Github.href = YourBotLinks.YourGithubLink;
                if(contains(Nav, Github)){
                        Github.innerHTML = YourBotLinkNames.YourGithubNavName;
                }
                if(contains(ButtonContainer, Github)){
                        Github.innerHTML = YourBotLinkNames.YourGithubButtonName;
                }
        })


});