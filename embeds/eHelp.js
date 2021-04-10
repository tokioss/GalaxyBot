module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("Dank Galaxy")
    .setDescription("List of commands for Galaxy Bot.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**/leaderboard**
**/rank**
**/rank** \`\`@UserName\`\`
**/help**
**/help** \`\`Command\`\`` , true)
    .setFooter("Snazzy#2951", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}