import os, re

class Resources:

    APP_NAME = 'ScudCloud'
    # Fake user agent to bypass deprecation warning (Fixes #541)
    USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit (KHTML, like Gecko) ScudCloud/v1.58 Chrome/999 Safari'
    SIGNIN_URL = 'https://slack.com/signin'
    MAINPAGE_URL_RE = re.compile(r'^http[s]://[a-zA-Z0-9_\-]+.slack.com/?$')
    MESSAGES_URL_RE = re.compile(r'^http[s]://[a-zA-Z0-9_\-]+.slack.com/messages/.*')
    SSO_URL_RE = re.compile(r'^http[s]://[a-zA-Z0-9_\-]+.(enterprise.)?slack.com/sso/saml/start')
    SERVICES_URL_RE = re.compile(r'^http[s]://[a-zA-Z0-9_\-]+.(enterprise.)?slack.com/services/.*')
    GOOGLE_OAUTH2_URL_RE = re.compile(r'^https://accounts.google.com/o/oauth')

    SPELL_LIMIT = 6
    SPELL_DICT_PATH  = '/usr/share/hunspell'
    DEFAULT_CONFDIR  = '~/.config/scudcloud'
    DEFAULT_CACHEDIR = '~/.cache/scudcloud'

    # It's initialized in /scudcloud script
    INSTALL_DIR = os.path.dirname(os.path.realpath(__file__))

    def get_path(filename):
        return os.path.join(Resources.INSTALL_DIR, 'resources', filename)
