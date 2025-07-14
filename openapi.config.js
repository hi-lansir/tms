import { generateService } from '@umijs/openapi'

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://192.168.10.115:8081/api/v3/api-docs',
  serversPath: './src',
})
