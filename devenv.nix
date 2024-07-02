{ pkgs, lib, config, inputs, ... }:
{
  name = "peopleplus-components";

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_20;
    npm.enable = true;
    npm.install.enable = true;
  };

  dotenv.disableHint = true;
  processes.dev-server.exec = "npm run dev";
}
