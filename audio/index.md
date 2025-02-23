# audio

## 名词解释
采样：当一个音频信号被处理时，取样意味着从一个连续的信号转化为离散的信号。

样本：每个样本点都是一个代表着该音频流在**特定时间** **特定声道**上的数值的 单精度浮点数

采样率（播放频率）：采样率就是一秒钟内获取帧的个数，单位是赫兹 (Hz)。采样率越高，音频效果越好。

采样帧: 由一组在特定时间上的所有声道的样本点组成的——即**所有声道在同一时间的样本点**（立体声有 2 个，5.1有 6 个，等等，每个帧包含的样本点个数和声道数相同）

声道：

音频片段组成参数： 一个或几个声道（1 代表单声道，2 代表立体声等等），一个长度（代表片段中采样帧的数目）和一个采样率（是每秒钟采样帧的个数）

> 备注： 只需用帧的数目除以采样率即可得到播放时间（单位为秒）。用样本点数目除以声道个数即可得到帧的数目。

[MDN: 网页音频接口的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)


## 模拟信号转数字信号的过程
1. 采样
2. 量化
3. 编码
4. 分析


## PCM 文件
PCM 文件就是未经封装的音频原始文件或者叫音频”裸数据“


## 数字信号
采样位深：每个采样点用多少bit来表示。位深代表的是震动幅度的表达精确程度。

采样率：

通道数：同一时间采集或播放的音频信号总数

## 视频
视频相关:
- 显示分辨率（屏幕分辨率），图像分辨率
- 帧率（FPS）: 是指每秒钟刷新的图片的帧数，也可以理解为图形处理器每秒钟能够刷新几次
- 场序（隔行扫描和逐行扫描）
- 比特率（Bit rate）是单位时间内传输送或处理的比特的数量，在音频领域也叫码率
- 编码模式： 
    - VBR（Variable Bitrate）:动态比特率 也就是没有固定的比特率（推荐编码模式）
    - ABR（Average Bitrate）平均比特率 是VBR的一种插值参数
    - CBR（Constant Bitrate），常数比特率 指文件从头到尾都是一种位速率

- 视频封装格式，简称 视频格式，也称为 容器.(有的说法还要区分是视频文件格式和视频封装格式)

- 视频格式:
    - mp4
    - mkv
    - fly
    - avi

- 视频协议:
    - RTSP、RTMP、HLS、HTTP



- [知乎： 分辨率、帧速率、比特率、视频格式的关系](https://zhuanlan.zhihu.com/p/60868555)


## 音频术语
- Opus 是一种高效的音频编码格式，适用于语音和音乐，具有低延迟和良好的音质。
- PCM（脉冲编码调制）是一种无损的音频格式

- 采样频率
- 采样位数
- 音频通道数
- 比特率 = 采样频率 * 采样位数 * 音频通道数
- 码率
- 编码算法
- 音频帧（编码单元）
- 音频帧持续时间 ( 单位 : 秒 ) = 采样点数 ( 单位 : 个 ) / 采样频率 ( 单位 : 赫兹 Hz ) ;

音频格式
- wav
- mp3

## 音视频相关
[音视频相关](https://hughfenghen.github.io/posts/2023/07/31/webav-3-create-video/)

- [WebAV](https://bilibili.github.io/WebAV/demo/2_1-concat-video)

- [音频处理](https://hughfenghen.github.io/posts/2024/10/28/webav-video-editor/)

- [音频: 声音的振幅，频率](https://pudding.cool/2018/02/waveforms/)

- [张鑫旭: JS交互增加声音](https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/)

- [博客: PCM音量控制](https://blog.jianchihu.net/pcm-volume-control.html)
