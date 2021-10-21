class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')

    create_table :accounts, id: :uuid do |t|
      t.string :name, null: false
      t.string :slack_access_token, null: false

      t.timestamps
    end
  end
end
