FROM ubuntu

RUN apt-get update \
 && apt-get install -y --no-install-recommends curl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

RUN filename=cloudflared-stable-linux-amd64.deb && \
    cd /tmp && \
    curl -sLO https://bin.equinox.io/c/VdrWdbjqyF/$filename && \
    dpkg -i $filename && \
    rm $filename

ENTRYPOINT ["cloudflared", "tunnel"]
