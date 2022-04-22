vec3 p = position;

vec3 f = gln_curl(position);

vUv = uv;

vec3 newPos = position + f;

vPosition = newPos;
vec3 newNormal = normal;
