module.exports = {
  'apiUrl': process.env.API_URL || process.env.SERVER_BASE_URL || 'http://localhost:3000',
  'organizationBaseUrl': process.env.ORGANIZATION_BASE_URL || 'org.local',
  'organizationEnabled': process.env.ORGANIZATION_ENABLED === 'true' || false
};
