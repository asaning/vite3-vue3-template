import { UserConfig, ConfigEnv } from 'vite';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command);
  console.log(mode);

  return {};
};
