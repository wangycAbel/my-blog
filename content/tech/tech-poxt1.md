---
id: 'tech-1'
name: 'nginx命令与配置'
date: '2024-11-6'
description: '测试mdeeeeeeeeeeeeeeeeeeeeeeeee'
---
```
#安装 Nginxsudo
apt install nginx -y
```

#启动 Nginx 并将其设置为开机启动sudo systemctl start nginx
sudo systemctl enable nginx

```

```

#检查 Nginx 服务是否正常运行
sudo systemctl status nginx

```

```

#在 `sites-available` 文件夹中为您的站点创建配置文件
sudo nano /etc/nginx/sites-available/example.com

```

```

#将以下内容粘贴到配置文件中，并将 example.com 替换为您的域名
server {
listen 80;
server_name example.com www.example.com;  # 替换为您的域名

```
root /var/www/example.com;  # 网站的根目录
index index.html index.htm index.nginx-debian.html;

location / {
    try_files $uri $uri/ =404;
}
```

}

```

```
