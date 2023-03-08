/**
 * @name MuteAllServersButton
 * @version 0.0.1
 * @description Mute All Servers Button
 * @author JediMinecraft1
 * @authorLink https://github.com/Jedi-Coder1
 * @source https://github.com/Jedi-Coder1/DownloadBdPlugins
 * @updateUrl https://raw.githubusercontent.com/Jedi-Coder1/DownloadBdPlugins/main/PluginFolder/MuteAllServersButton.plugin.js
 */

/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you've mistakenly tried to run me directly. \\n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/


const GuildStore = Object.keys(BdApi.Webpack.getModule(m => m.getName?.() === "GuildStore"));
const notifitionsSettings = BdApi.Webpack.getModule(m => m.updateGuildNotificationSettings);
module.exports = class MuteAllServerButton {
    stop() {
        this.btn.remove()};
    start() {
        const root = document.querySelector(".listItem-3SmSlK")
        const btn = this.btn = document.createElement("button");
        root.append(btn);

        btn.addEventListener('click', () => {
            const guildsArray = Object.keys(GuildStore.getGuilds());
            for (const element of guildsArray) {
                notifitionsSettings.updateGuildNotificationSettings(element, {muted: true})};
        });
}};
