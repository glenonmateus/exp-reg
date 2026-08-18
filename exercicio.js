import { cpfs, ips } from './base.js'

const regExpCpf = /((\d{3}\.?){3}-\d{2})/g
console.log(cpfs, cpfs.match(regExpCpf))

const regExpIp = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g
console.log(ips, ips.match(regExpIp))
