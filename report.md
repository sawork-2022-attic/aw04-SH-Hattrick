# 软件体系结构 aw4

### 一、创建镜像并进行压力测试

1. **配置jib并创建镜像**

   1. 全程按照教学视频中的操作即可。除了使用了版本更高的jib。

   ![image-20220330135626287](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\1.png)

   ​			                        <img src="C:\Users\Yongp\Desktop\Classified\SS\AW4\img\2.png" alt="image-20220330135757668" style="zoom:50%;" />

   ​		在docker中可以看到新创建的镜像。

   ![image-20220330135952402](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\3.png)

   

2. **开启镜像并进行压力测试**

   ![image-20220330140905486](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\4.png)

   可以在docker中看到正在运行的镜像并在浏览器中打开之。

   ![image-20220330141014402](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\5.png)

   配置好gatling，配置自定义的MySimulation。

   ![image-20220330141157290](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\6.png)

   运行gatling。

   ![image-20220330141332885](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\7.png)

   如图，对于使用0.5cpu的pos服务器，本次测试使用了100次数的并发访问，最小应答时间为0.18s，最大应答时间为1.342s，平均应答时间8.90s。

   

### 二、使用haproxy进行水平扩展

由于haproxy官方没有windows版本的应用，因此在网上找到了其他人编译linux源码的windows可用版本。

首先，创建多个服务器。

![image-20220330141953265](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\8.png)

修改gatling,mysimulation的url配置，并开启haproxy与gatlin。

值得注意的是，运行四个服务器进行两次压力测试，第二次的时间显著优于第一次（如下图）。

![image-20220330142158980](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\9.png)![image-20220330142418327](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\10.png)



### 三、缓存与会话

我们在springboot的启动应用类前添加@EnableCache注解，并在JD类添加@Cacheable注解，运行含四个占用0.5cpu的服务器集群，接连启动两次：

![image-20220331125608560](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\11.png)

![image-20220331125617312](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\12.png)

如上图所示：第二次测试的效率显著优于第一次，第一次甚至有很多“KO”的连接，足以证明缓存在访问服务器时发挥的重要作用。

在docker容器中配置redis,使用docker pull redis命令。由于国外镜像站被锁，需要切换到国内docker镜像站。

![image-20220331163903650](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\13.png)

如图，成功在docker中创建了redis镜像。

为项目配置cache类型：

![image-20220331164025480](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\14.png)

并蒋上面的session.store-type改为redis。

![image-20220331164154124](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\15.png)

运行两个服务器，在another redis中，可以看到它们已经与redis成功连接。

![image-20220331164300633](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\16.png)

进行压力测试：

![image-20220331164352655](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\17.png)

![image-20220331164401997](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\18.png)



#### Redis Cluster

现在来创建redis集群。

首先创建三个redis服务器：

![image-20220331165313717](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\19.png)

进入某一个redis服务器的控制台，使用如下命令：

![image-20220331171316023](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\20.png)

其中参数是所有redis服务器的ip和端口，即可建好redis集群。

进行压力测试：

![image-20220331171420333](C:\Users\Yongp\Desktop\Classified\SS\AW4\img\21.png)