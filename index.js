var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Elite Console Customs",
            assets: {
                large_image: "elite",
                large_text: "Elite Console Customs" // THIS WILL SHOW AS "Playing <Status>" from the outisde
            },buttons: [{ label: "Join Elite Console", url: "https://discord.gg/console" }, { label: "Join Elite Hub", url: "https://discord.gg/U8xYhP8DWx" }]
        }
    })
})
client.login({ clientId: "727460472231690315" }).catch(console.error);