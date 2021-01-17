// @ts-ignore
import { PluginInstallFunction } from 'vue';
import { VueDecorator } from 'vue-class-component';
import * as SocketIOClient from 'socket.io-client';
// augment typings of Vue.js
import "./vue"

export interface SocketToVuexOptions {
  actionPrefix?: string;
  mutationPrefix?: string;
  eventToMutationTransformer?: (eventName: string) => string;
  eventToActionTransformer?: (eventName: string) => string;
}

export interface VueSocketIOExtOptions extends SocketToVuexOptions{
  socket: SocketIOClient.Socket;
}

declare class VueSocketIOExt {
  static install: PluginInstallFunction;
  static defaults: SocketToVuexOptions;
}

export default VueSocketIOExt;
export const Socket: (eventName?: string) => VueDecorator;
