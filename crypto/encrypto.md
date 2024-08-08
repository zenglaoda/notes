# 加密算法
encrypto
decrypto

## 密码学
公开密钥密码学（英语：Public-key cryptography）也称非对称式密码学（英语：Asymmetric cryptography）是密码学的一种算法，它需要两个密钥，一个是公开密钥，另一个是私有密钥；公钥用作加密，私钥则用作解密。使用公钥把明文加密后所得的密文，只能用相对应的私钥才能解密并得到原本的明文，最初用来加密的公钥不能用作解密。由于加密和解密需要两个不同的密钥，故被称为非对称加密；不同于加密和解密都使用同一个密钥的对称加密。公钥可以公开，可任意向外发布；私钥不可以公开，必须由用户自行严格秘密保管，绝不透过任何途径向任何人提供。


## 散列算法(哈希算法，摘要算法)
作用：对任意一组输入数据进行计算，得到一个固定长度的输出摘要。
使用场景：可以被应用在检查 `文件完整性` 以及 `数字签名` 等场景

哈希算法最重要的特点就是：
- 相同的输入一定得到相同的输出；
- 不同的输入大概率得到不同的输出。
- 不可逆性，几乎不能根据输出推断出输入


哈希碰撞：是指两个不同的输入得到了相同的输出。碰撞是一定会出现的，因为输出的字节长度是固定的，所以，哈希算法是把一个无限的输入集合映射到一个有限的输出集合，必然会产生碰撞。哈希算法的输出长度越长，就越难产生碰撞，也就越安全。


常见的哈希算法: MD5(128 bits)，SHA-1(160 bits)，SHA-256(256 bits)，SHA-512(512 bits)，HMAC算法。HMAC本质上就是把key混入摘要的算法。验证此哈希时，除了原始的输入数据，还要提供key。可以用HMAC算法取代原有的自定义的加盐算法

加盐: 即使用户使用了常用口令，我们也可以采取措施来抵御彩虹表攻击，方法是对每个口令额外添加随机数，这个方法称之为加盐（salt）。使用 HMAC算法可以更好的加盐。
```js
digest = md5(salt+inputPassword)
```

- [廖雪峰: 哈希算法](https://www.liaoxuefeng.com/wiki/1252599548343744/1304227729113121)



## 对称加密算法
- AES（密钥长度的最少支持为 128 位、 192 位、256 位）
- DES（密钥长度 56位，不安全）
- 3DES（DES的一个升级）

| 名称 | 密钥名称        | 运行速度 | 安全性 | 资源消耗 |
| ---- | --------------- | -------- | ------ | -------- |
| DES  | 56位            | 较快     | 低     | 中       |
| 3DES | 112位或168位    | 慢       | 中     | 高       |
| AES  | 128、192、256位 | 快       | 高     | 低       |

## 非对称加密算法
- 如果使用 公钥 对数据 进行加密，只有用对应的 私钥 才能 进行解密。
- 如果使用 私钥 对数据 进行加密，只有用对应的 公钥 才能 进行解密。

- RSA（推荐）
- ECC（加解密时间长，CPU消耗严重）


## PBE算法（口令加密算法）
实际上用户输入的口令并不能直接作为AES的密钥进行加密（除非长度恰好是128/192/256位），并且用户输入的口令一般都有规律，安全性远远不如安全随机数产生的随机口令。因此，用户输入的口令，通常还需要使用PBE算法，采用随机数杂凑**计算出真正的密钥**，再进行加密


## 数字签名
相反，如果某一用户使用他的私钥加密明文，任何人都可以用该用户的公钥解密密文；由于私钥只由该用户自己持有，故可以肯定该文件必定出自于该用户；公众可以验证该用户发布的数据或文件是否完整、中途有否曾被篡改，接收者可信赖这些数据、文件确实来自于该用户，这被称作数字签名。

```js
signature = rsa(privateKey, SHA256(message));
```

DSA签名：和RSA数字签名相比，DSA的优点是更快
ECDSA签名：它的特点是可以从私钥推出公钥

## 拓展
DH算法: DH算法是一种密钥交换协议，通信双方通过不安全的信道协商密钥，然后进行对称加密传输。DH算法没有解决中间人攻击。
