dataSource {
    pooled = true
    jmxExport = true
////    driverClassName = "org.h2.Driver"
////    username = "sa"
////    password = ""
	pooled = true
	driverClassName = "com.mysql.jdbc.Driver"
	username = "sa"
	password = ""
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = false
//    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory' // Hibernate 3
    cache.region.factory_class = 'org.hibernate.cache.ehcache.EhCacheRegionFactory' // Hibernate 4
    singleSession = true // configure OSIV singleSession mode
    flush.mode = 'manual' // OSIV session flush mode outside of transactional context
}
sqlLog = true //added from 
// environment specific settings
environments {
	
	local {
		dataSource {
			dbCreate = "update" // one of 'create', 'create-drop', 'update', 'validate', ''
			url = "jdbc:mysql://localhost:3306/noodles?zeroDateTimeBehavior=convertToNull&useUnicode=yes&characterEncoding=UTF-8"
			dialect = "com.domain.mysql.dialect.MySQLUTF8InnoDBDialect"
			driverClassName = "com.mysql.jdbc.Driver"
			username = "root"
			password = "root"
			properties {
				// See http://grails.org/doc/latest/guide/conf.html#dataSource for documentation
				jmxEnabled = true
				initialSize = 5
				maxActive = 50
				minIdle = 5
				maxIdle = 25
				maxWait = 10000
				maxAge = 10 * 60000
				timeBetweenEvictionRunsMillis = 5000
				minEvictableIdleTimeMillis = 60000
				validationQuery = "SELECT 1"
				validationQueryTimeout = 3
				validationInterval = 15000
				testOnBorrow = true
				testWhileIdle = true
				testOnReturn = false
				jdbcInterceptors = "ConnectionState"
				defaultTransactionIsolation = java.sql.Connection.TRANSACTION_READ_COMMITTED
			 }
		}
	}
	
	development {
		dataSource {
			dbCreate = "update" // one of 'create', 'create-drop', 'update', 'validate', ''
			url = "jdbc:mysql://localhost:3306/noodles?zeroDateTimeBehavior=convertToNull&useUnicode=yes&characterEncoding=UTF-8"
			dialect = "org.hibernate.dialect.MySQL5InnoDBDialect"
			driverClassName = "com.mysql.jdbc.Driver"
			username = "root"
			password = "root"
			properties {
				// See http://grails.org/doc/latest/guide/conf.html#dataSource for documentation
				jmxEnabled = true
				initialSize = 5
				maxActive = 50
				minIdle = 5
				maxIdle = 25
				maxWait = 10000
				maxAge = 10 * 60000
				timeBetweenEvictionRunsMillis = 5000
				minEvictableIdleTimeMillis = 60000
				validationQuery = "SELECT 1"
				validationQueryTimeout = 3
				validationInterval = 15000
				testOnBorrow = true
				testWhileIdle = true
				testOnReturn = false
				jdbcInterceptors = "ConnectionState"
				defaultTransactionIsolation = java.sql.Connection.TRANSACTION_READ_COMMITTED
			 }
		}
	}
	
	test {
		dataSource {
			dbCreate = "update" // one of 'create', 'create-drop', 'update', 'validate', ''
			url = "jdbc:mysql://localhost:3306/noodles?zeroDateTimeBehavior=convertToNull&useUnicode=yes&characterEncoding=UTF-8"
			dialect = "org.hibernate.dialect.MySQL5InnoDBDialect"
			driverClassName = "com.mysql.jdbc.Driver"
			username = "root"
			password = "root"
			properties {
				// See http://grails.org/doc/latest/guide/conf.html#dataSource for documentation
				jmxEnabled = true
				initialSize = 5
				maxActive = 50
				minIdle = 5
				maxIdle = 25
				maxWait = 10000
				maxAge = 10 * 60000
				timeBetweenEvictionRunsMillis = 5000
				minEvictableIdleTimeMillis = 60000
				validationQuery = "SELECT 1"
				validationQueryTimeout = 3
				validationInterval = 15000
				testOnBorrow = true
				testWhileIdle = true
				testOnReturn = false
				jdbcInterceptors = "ConnectionState"
				defaultTransactionIsolation = java.sql.Connection.TRANSACTION_READ_COMMITTED
			 }
		}
	}
	
	production {
		dataSource {
			dbCreate = "update" // one of 'create', 'create-drop', 'update', 'validate', ''
			url = "jdbc:mysql://localhost:3306/noodles?zeroDateTimeBehavior=convertToNull&useUnicode=yes&characterEncoding=UTF-8"
			dialect = "org.hibernate.dialect.MySQL5InnoDBDialect"
			driverClassName = "com.mysql.jdbc.Driver"
			username = "root"
			password = "root"
			properties {
			   // See http://grails.org/doc/latest/guide/conf.html#dataSource for documentation
			   jmxEnabled = true
			   initialSize = 5
			   maxActive = 50
			   minIdle = 5
			   maxIdle = 25
			   maxWait = 10000
			   maxAge = 10 * 60000
			   timeBetweenEvictionRunsMillis = 5000
			   minEvictableIdleTimeMillis = 60000
			   validationQuery = "SELECT 1"
			   validationQueryTimeout = 3
			   validationInterval = 15000
			   testOnBorrow = true
			   testWhileIdle = true
			   testOnReturn = false
			   jdbcInterceptors = "ConnectionState"
			   defaultTransactionIsolation = java.sql.Connection.TRANSACTION_READ_COMMITTED
			}
		}
	}

}
