
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)



# Discord Bot Website Template
- [Demo](https://dbot-template-demo.netlify.app/)

Responsive and easily customizable website template for your discord bot. 

![](https://cdn.discordapp.com/attachments/808801447340015626/946796595704377344/unknown.png)

## Usage
### Customizing markup
- Download or clone the repository 
- Open `main.js` in your preferred text editor
- Read everything above `line 27`
- Follow the instructions provided by the comments left in `main.js`
- Save the file

```javascript
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
```

### Modifying colors
- Open style.css
- Modify the color variables color values (HSL, HSLA, RGB, RGBA, Hexadecimal or Color keywords) within `:root` at `line 2`
- Save the file

```css
:root {
        --primary: #fff;
        /*         ^ Primary Color */
        --secondary: rgba(255, 255, 255, 0.7);
        /*           ^ Secondary Color */
        --bg-main: #181818;
        /*           ^ Body Background Color */
        --bg-inner: #111111;
        /*           ^ Inner Background Color */
}
```
### Credits
[@synesta](https://github.com/synesta) provided feedback.