angular.module('mongolia.framework.servers.cipher', [])

.factory('mrCipherService', ['CipherKey',function(CipherKey) {
	var mrCipher={};
	mrCipher.jiami=function(int){
            setMaxDigits(131); //131 => n的十六进制位数/2+3  
        var key = new RSAKeyPair("10001", '', CipherKey); //10001 => e的十六进制 
        var newPwd = encryptedString(key, int); //不支持汉字  
		return newPwd;
	}
	return mrCipher;
}])