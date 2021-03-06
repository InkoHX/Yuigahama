const { Command, KlasaMessage } = require('klasa')
const { MessageAttachment } = require('discord.js')
const { Nekoslife } = require('../../../Yui')

/**
 * @extends Command
 */
class LewdFox extends Command {
  constructor (...args) {
    super(...args, {
      nsfw: true,
      requiredPermissions: ['ATTACH_FILES'],
      description: language => language.get('COMMAND_LEWD_FOXGIRL_DESCRIPTION')
    })
  }

  /**
   * @param {KlasaMessage} message
   */
  async run (message) {
    return message.send(new MessageAttachment((await Nekoslife.request(Nekoslife.END_POINTS_V3.nsfw.fox, true))['data']['response']['url']))
  }
}

module.exports = LewdFox
