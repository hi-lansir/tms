import { generateService } from '@umijs/openapi'

// 192.168.10.115:8081/api/v2/api-docs
generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://192.168.10.115:8081/api/v2/api-docs',
  serversPath: './src',
})
