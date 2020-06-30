# ethereum-node

### Docker Tips
If you are using an external drive to store data, you may want to configure docker to wait for the drive before starting at system boot. This can be achieved with systemd by creating a file similar to the following template.


```
# list systemd mount targs
systemctl list-units --type=mount

# extend docker unit
mkdir -p /etc/systemd/system/docker.service.d

# create unit conf
sudo cat <<EOT >> /etc/systemd/system/docker.service.d/wait-for-mount.conf
[Unit]
Requires=media-my-external-drive.mount
After=media-my-external-drive.mount
EOT

# reload systemd config
systemctl daemon-reload
```
