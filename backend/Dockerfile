FROM python:3.9

ENV HOME=/
ENV APP_HOME=/backend
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir $APP_HOME
RUN addgroup --system app && useradd -g app app -d $HOME

WORKDIR $APP_HOME

# install dependencies
RUN apt-get update
RUN apt-get install -y git gettext
RUN pip install --upgrade pip

COPY requirements.txt $APP_HOME/requirements.txt
RUN pip install -r requirements.txt

# copy and install requirements. No code copying!
RUN chown -R app:app $APP_HOME
COPY . $APP_HOME

# RUN chmod 777 ./parse.session

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]