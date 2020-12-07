#!/bin/sh -eu
if [ -z "${LOGIN_URL:-}" ]; then
    LOGIN_URL_JSON=undefined;
else
    
    LOGIN_URL_JSON=${LOGIN_URL}
    
fi
if [ -z "${DB_URL:-}" ]; then
    DB_URL_JSON=undefined;
else
    
    DB_URL_JSON=${DB_URL}
    
fi
if [ -z "${REG_URL:-}" ]; then
    REG_URL_JSON=undefined;
else
    
    REG_URL_JSON=${REG_URL}
    
fi
if [ -z "${EVENTS_URL:-}" ]; then
    EVENTS_URL_JSON=undefined;
else
    
    EVENTS_URL_JSON=${EVENTS_URL}
    
fi

cat <<EOF
window.REACT_APP_LOGIN_URL="$LOGIN_URL_JSON";
window.REACT_APP_DB_URL="$DB_URL_JSON";
window.REACT_APP_REG_URL="$REG_URL_JSON";
window.REACT_APP_EVENTS_URL="$EVENTS_URL_JSON";
EOF
