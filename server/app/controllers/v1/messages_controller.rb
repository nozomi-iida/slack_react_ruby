module V1
  class MessagesController < ApplicationController
    def create
      client = Slack::Web::Client.new(token: current_account.slack_access_token)
      channels = client.conversations_list.channels
      pre_slack_bot = channels.select { |channel| p channel.name === "pre-slack-bot" }
      client.chat_postMessage(
        channel: pre_slack_bot[0][:id],
        text: resource_params[:content]
      )
    end

    private

    def resource_params
      params.require(:message).permit(:content)
    end
  end
end
