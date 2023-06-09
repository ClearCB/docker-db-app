FROM python:3.10-alpine

ENV PYTHONPATH="/app/"
ENV MONGO_ATLAS_URI="mongodb://<user>:<password>@<IP>:27017/"

RUN pip install --upgrade pip

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD [ "python", "./app.py" ]