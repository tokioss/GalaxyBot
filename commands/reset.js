exports.run = (client, message, args, sql) =>{
    let uRole = message.guild.roles.find("name", "Administrator");
    if(!uRole){
      message.reply("Sorry you don't have access to this command.");
    }else{
      if(message.member.roles.has(uRole.id)){
        const rMember = message.guild.member(message.mentions.users.first());
        if(!rMember){
            message.reply("Please choose a member by mentioning them. Example: /reset @UserName");
        }else{
            sql.run(`UPDATE userScores SET globalPoints=0, weeklyPoints=0, uLevel=1, nextPL=50 WHERE userID=${rMember.user.id} AND guildID=${message.guild.id}`);
            sql.all(`SELECT userID from userScores WHERE guildID = '${message.guild.id}' ORDER BY globalPoints DESC`).then(rColumns =>{
                const setRankUsers = rColumns.map(z => z.userID);
                let i = 0;
                while(setRankUsers[i]){
                  sql.run(`UPDATE userScores SET globalRank = ${i + 1} WHERE userID=${setRankUsers[i]} AND guildID=${message.guild.id}`);
                  i++
                }//while loop end
              })
            message.reply(`${rMember.user.username} has been reset.`);
        }
      }else{
        message.reply("Sorry you don't have access to this command.");
      }
    }
  }